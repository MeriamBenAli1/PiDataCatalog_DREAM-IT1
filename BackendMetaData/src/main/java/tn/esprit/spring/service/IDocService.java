package tn.esprit.datacatalog.Service;

import tn.esprit.datacatalog.Entities.Documentation;
import tn.esprit.datacatalog.Entities.Policy;

import java.util.List;

public interface IDocService {
    public List<Documentation> retrieveAllDoc();

    public Documentation addDoc(Documentation d);
    void deleteDoc(long id);
    public Documentation updateDoc(long id, Documentation Doc);
    public Documentation getDocById(long id) ;
}
