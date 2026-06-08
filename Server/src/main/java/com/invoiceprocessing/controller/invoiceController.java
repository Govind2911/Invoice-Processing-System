package com.invoiceprocessing.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.invoiceprocessing.Services.ServiceImpl;
import com.invoiceprocessing.entity.Invoice;

@RestController
@CrossOrigin
public class invoiceController {
   
	ServiceImpl services;
	
	public invoiceController(ServiceImpl services) {
		super();
		this.services = services;
	}


	@PostMapping("/invoice")
	public Invoice addInvoice(@RequestBody Invoice invoice) {
		return services.addInvoices(invoice);
	}
	
	@GetMapping("/invoice")
	public List<Invoice> getInvoices(){
		return services.getInvoices();
		}
	
	@DeleteMapping("invoice/{invoiceId}")
	public void deleteById(@PathVariable("invoiceId") Long id) {
		 services.deleteById(id);
	}
}

