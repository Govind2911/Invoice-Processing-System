package com.invoiceprocessing.Services;

import java.util.List;

import com.invoiceprocessing.entity.Invoice;

public interface Services {
     
	public Invoice addInvoices(Invoice invoice);
	
	public List<Invoice> getInvoices();
	
	public void deleteById(Long id);
	
}
