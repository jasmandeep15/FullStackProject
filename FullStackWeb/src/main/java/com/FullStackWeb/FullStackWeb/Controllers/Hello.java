package com.FullStackWeb.FullStackWeb.Controllers;

import com.FullStackWeb.FullStackWeb.Model.Product;
import com.FullStackWeb.FullStackWeb.Services.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Hello {

    ProductService productService;
    public Hello(ProductService productService){
        this.productService = productService;
    }
    @GetMapping("/")
    public String sayHello(){
        return "Hi from jasman";
    }

    @GetMapping("/hello")
    public String Hello(){
        return "you are awesome";
    }

    @GetMapping("/products")
    public List getData(){
        return productService.getProducts();
    }
    @GetMapping("/products/{id}")
    public Product getProductbyId(@PathVariable int id){
        return productService.getProductById(id);
    }
    @PostMapping("/products")
    public void addProduct(@RequestBody Product prod){
        productService.addProduct(prod);
    }
    @PutMapping("/products")
    public void updateProduct(@RequestBody Product prod){
        productService.updateProduct(prod);
    }
    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable int id){
        productService.deleteItem(id);
    }
}
