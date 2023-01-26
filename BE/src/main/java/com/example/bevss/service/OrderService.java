package com.example.bevss.service;

import com.example.bevss.dto.OrderDTO;
import com.example.bevss.dto.SearchOrderDTO;
import java.util.List;

public interface OrderService {
    List<SearchOrderDTO> listOrder(String phone);

    List<OrderDTO> orderDetail(Long id);

}
