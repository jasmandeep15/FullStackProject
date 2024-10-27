package com.FullStackWeb.FullStackWeb.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Primary;
@Data
@Entity
public class Product {

    @Id
    private int id;
    private String name;
    private String description;

}
