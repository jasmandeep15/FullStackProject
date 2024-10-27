package com.FullStackWeb.FullStackWeb.Services;

import com.FullStackWeb.FullStackWeb.Model.Product;
import com.FullStackWeb.FullStackWeb.Repositories.ProductRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {
    ProductRepo productRepo;

    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

//    List<Product> list = new ArrayList<>(List.of(new Product(1,"jasman","he is a regcool boy"),
//             new Product(2,"jasman","he is a cool boy"),
//             new Product(3,"jasman","he is a coveverol boy"),
//             new Product(14,"jasman","he is a cooeve boy")));

     public Product getProduct(int id){
//         return list.stream()
//                 .filter(item -> item.getId() == id).findFirst().get();
         return productRepo.findById(id).orElse(new Product());
     }
    public  List<Product> getProducts(){
        return productRepo.findAll();
    }

    public Product getProductById(int id) {
        return productRepo.findById(id).orElse(new Product());


    }

    public void addProduct(Product prod) {
        productRepo.save(prod);
    }

    public void updateProduct(Product prod) {
    productRepo.save(prod);
    }

    public void deleteItem(int id) {
         productRepo.delete(getProductById(id));
    }
}
