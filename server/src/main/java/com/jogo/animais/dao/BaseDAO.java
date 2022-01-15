package com.jogo.animais.dao;

import com.jogo.animais.entity.Animal;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

public interface BaseDAO {

    Animal salvar(Animal dao);

    List<Animal> getAll();

    void delete(Animal dao);

    Animal findById(Long id);

}
