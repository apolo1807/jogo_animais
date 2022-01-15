package com.jogo.animais.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nome;

    @Column
    private String caracteristica;

    @Column
    private String caracteristica2;

    //private Integer idPai;
    //private Integer filhoDaResposta;

}
