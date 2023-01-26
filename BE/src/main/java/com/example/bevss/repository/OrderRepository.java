package com.example.bevss.repository;

import com.example.bevss.dto.OrderDTO;
import com.example.bevss.dto.SearchOrderDTO;
import com.example.bevss.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

    @Query(value = "select o.id as orderId, us.username as name , us.phone from user us join orders o  on us.id = o.user_id " +
            " where :phone is null or  us.phone like  %:phone% ",nativeQuery = true)
    List<SearchOrderDTO> listOrder(@Param("phone") String phone);

    @Query(value = "SELECT p.name as name  , p.price as price, oo.quantity as quantity,p.image as image FROM order_product oo  JOIN product p ON p.id = oo.product_id " +
            " WHERE oo.order_id = :id ",nativeQuery = true)
    List<OrderDTO>  orderDetail(Long id);

}
