package com.jogo.animais.dao;

import com.jogo.animais.entity.Animal;
import com.jogo.animais.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/animal")
public class AnimalDAO implements BaseDAO {

    @Autowired
    private AnimalRepository repository;

    @Override
    @PostMapping("/new")
    public Animal salvar(@RequestBody @Valid Animal entity) {
        return repository.save(entity);
    }

    @Override
    @GetMapping
    public List<Animal> getAll() {
        return repository.findAll();
    }

    @Override
    @DeleteMapping("{id}")
    public void delete(Animal entity) {
        repository.deleteById(entity.getId());
    }

    @Override
    @GetMapping("{id}")
    public Animal findById(@PathVariable("id") Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Animal não encontrado"));
    }
}
