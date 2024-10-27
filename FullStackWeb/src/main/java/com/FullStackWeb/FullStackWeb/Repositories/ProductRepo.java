package com.FullStackWeb.FullStackWeb.Repositories;

import com.FullStackWeb.FullStackWeb.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product , Integer> {
}
