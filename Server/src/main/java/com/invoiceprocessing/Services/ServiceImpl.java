package com.invoiceprocessing.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.invoiceprocessing.Repository.InvoiceRepo;
import com.invoiceprocessing.entity.Invoice;

@Service
public class ServiceImpl implements Services{

	private InvoiceRepo repo;
	
	public ServiceImpl(InvoiceRepo repo) {
		super();
		this.repo = repo;
	}

	@Override
	public Invoice addInvoices(Invoice invoice) {
		return repo.save(invoice);
	}

	@Override
	public List<Invoice> getInvoices() {
		return repo.findAll();
   }

	@Override
	public void deleteById(Long id) {
		 repo.deleteById(id);
		
	}	
	
	

}
