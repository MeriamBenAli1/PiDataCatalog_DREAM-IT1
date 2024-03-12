package tn.esprit.spring.service;



import tn.esprit.spring.enities.Documentation;

import java.util.List;

public interface IDocService {
    public List<Documentation> retrieveAllDoc();

    public Documentation addDoc(Documentation d);
    void deleteDoc(long id);
    public Documentation updateDoc(long id, Documentation Doc);
    public Documentation getDocById(long id) ;
}
