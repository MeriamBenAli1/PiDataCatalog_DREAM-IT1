import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';
import { ColumnMatch, Table } from './lineage.model';
import { LineageService } from './lineage.service';

@Component({
  selector: 'app-lineage',
  templateUrl: './lineage.component.html',
  styleUrls: ['./lineage.component.scss']
})
export class LineageComponent implements OnInit {
  tableWithColumns: Table[] = [];
  private myDiagram: go.Diagram;
  nodeDataArray: any[] = []; 
  linkDataArray: any[] = [];
  constructor(private lineageService: LineageService) { }

  ngOnInit(): void {
    this.getLineageData();
  }
  
    // Parcours des tables et métadonnées pour trouver les correspondances
   
  getLineageData(): void {
    this.lineageService.getLineageData()
      .subscribe(tables => {
        this.tableWithColumns = tables;
        this.nodeDataArray = this.tableWithColumns.map(table => {
          return {
            key: table.name,
            name: table.name,
            visibility: true,
            items: table.schemas.map(metadata => {
              return {
                name: metadata.name ,
                type: metadata.type
              };
            })
          };
        });
        
       // Récupération des relations entre les tables depuis le service
       this.lineageService.getTableWithRelation().subscribe(columnMatches => {
         this.linkDataArray = [];
        for (const match of columnMatches) {
          const link = {
            from: match.tables[0], 
            to: match.tables[1]     
          };
          this.linkDataArray.push(link);
        }
        console.log("columnMatches", columnMatches);
        this.initDiagram(this.nodeDataArray, this.linkDataArray);
      });
    });
  }
  
  
  initDiagram(nodeDataArray: any[],linkDataArray : any[]): void {
    const $ = go.GraphObject.make;
    const myDiagram =
      $(go.Diagram, "myDiagramDiv",
        {
          allowDelete: false,
          allowCopy: false,
          "undoManager.isEnabled": true
        });

    function colorSwitch(n: string) {
      const isDark = myDiagram.model.modelData.darkMode;
      if (n === "green") return (isDark ? "#429E6F" :"#62bd8e");
      if (n === "blue") return (isDark ? "#3f9fc6" :"#3999bf");
      if (n === "purple") return (isDark ? "#9951c9" :"#7f36b0");
      if (n === "red") return (isDark ? "#ff4d3d" :"#c41000");
      return "black";
    }

    const itemTempl =
      $(go.Panel, "Horizontal",
        $(go.Shape,
          { desiredSize: new go.Size(15, 15), strokeJoin: "round", strokeWidth: 3, stroke: "#eeeeee", margin: 2 },
          new go.Binding("figure", "figure"),
          new go.Binding("fill", "color", n => colorSwitch(n)),
          new go.Binding("stroke", "color", n => colorSwitch(n))
        ),
        $(go.TextBlock,
          { font: " 14px sans-serif", stroke: "black" },
          new go.Binding("text", "name"), new go.Binding("stroke", "", n => (myDiagram.model.modelData.darkMode) ? "#f5f5f5" :"#000000")),
      );

      // define the Link template, representing a relationship
      myDiagram.linkTemplate =
        $(go.Link,  // the whole link panel
          {
            selectionAdorned: true,
            layerName: "Background",
            reshapable: true,
            routing: go.Link.AvoidsNodes,
            corner: 5,
            curve: go.Link.JumpOver,
            isShadowed: true,
            shadowOffset: new go.Point(2, 2),
            shadowColor: "#919cab"
          },
          $(go.Shape,  // the link shape
            { stroke: "#f7f9fc", strokeWidth: 4 }),
          $(go.Panel, "Auto", {segmentIndex: 0 , segmentOffset: new go.Point(22,0)},
            $(go.Shape, "RoundedRectangle", {fill: "#f7f9fc"}, {stroke: "#eeeeee"}),
            $(go.TextBlock,  // the "from" label
              {
                textAlign: "center",
                font: "bold 14px sans-serif",
                stroke: "black",
                background: "#f7f9fc",
                segmentOffset: new go.Point(NaN, NaN),
                segmentOrientation: go.Link.OrientUpright
              },
              new go.Binding("text", "text"))),
            $(go.Panel, "Auto",
              {
                segmentIndex: -1,
                segmentOffset: new go.Point(-13,0)
              },
              $(go.Shape, "RoundedRectangle", {fill: "#edf6fc"}, {stroke: "#eeeeee"}),
              $(go.TextBlock,  // the "to" label
                {
                  textAlign: "center",
                  font: "bold 14px sans-serif",
                  stroke: "black",
                  segmentIndex: -1,
                  segmentOffset: new go.Point(NaN, NaN),
                  segmentOrientation: go.Link.OrientUpright
                },
              new go.Binding("text", "toText"))),
        );
      myDiagram.nodeTemplate =
      $(go.Node, "Auto",
        {
          selectionAdorned: true,
          resizable: true,
          layoutConditions: go.Part.LayoutNone,
          fromSpot: go.Spot.LeftRightSides,
          toSpot: go.Spot.LeftRightSides,
          isShadowed: true,
          shadowOffset: new go.Point(4, 4),
          shadowColor: "#919cab"
        },
        new go.Binding("location", "location").makeTwoWay(),
        $(go.Shape, "RoundedRectangle",
          { stroke: "#e8f1ff", strokeWidth: 3 },
          new go.Binding("fill", "", n => (myDiagram.model.modelData.darkMode) ? "#4a4a4a" : "#f7f9fc")
        ),
        $(go.Panel, "Table",
          {
            margin: 8,
            stretch: go.GraphObject.Fill,
            width: 160
          },
          $(go.RowColumnDefinition, { row: 0, sizing: go.RowColumnDefinition.None }),
          $(go.TextBlock,
            {
              row: 0, column: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
              font: "bold 16px sans-serif"
            },
            new go.Binding("text", "name"),
            new go.Binding("stroke", "", n => (myDiagram.model.modelData.darkMode) ? "#d6d6d6" : "#000000")),
          $(go.TextBlock, "Attributes",
            {
              row: 1, font: "bold 15px sans-serif",
              margin: new go.Margin(8, 0, 0, 0),
              alignment: go.Spot.TopLeft,
            },
            new go.Binding("stroke", "", n => (myDiagram.model.modelData.darkMode) ? "#d6d6d6" : "#000000")),
          $(go.Panel, "Vertical",
            {
              name: "NonInherited",
              alignment: go.Spot.TopLeft,
              defaultAlignment: go.Spot.Left,
              itemTemplate: itemTempl,
              row: 2
            },
            new go.Binding("itemArray", "items")),
          $(go.TextBlock, "Inherited Attributes",
            {
              row: 3, font: "bold 15px sans-serif",
              margin: new go.Margin(8, 0, 0, 0),
              alignment: go.Spot.TopLeft,
            },
            new go.Binding("visible", "visibility", Boolean),
            new go.Binding("stroke", "", n => (myDiagram.model.modelData.darkMode) ? "#d6d6d6" : "#000000")),
          $(go.Panel, "Vertical",
            {
              name: "Inherited",
              alignment: go.Spot.TopLeft,
              defaultAlignment: go.Spot.Left,
              itemTemplate: itemTempl,
              row: 4
            },
            new go.Binding("itemArray", "inheriteditems"))
        )
      );
      /*
      const linkDataArray = [];
      for (const match of columnMatches) {
        const link = {
          from: match.tables[0], // Nom de la première table
          to: match.tables[1]            // Texte à l'autre extrémité de la relation
        };
        linkDataArray.push(link);
        console.log("links : " ,linkDataArray);
      }*/
      
      
      myDiagram.model = new go.GraphLinksModel(
        {
          copiesArrays: true,
          copiesArrayObjects: true,
          modelData: { darkMode: false },
          nodeDataArray: nodeDataArray,
          linkDataArray: linkDataArray

        });
   
  }

    
  
  }
  