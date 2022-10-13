package com.example.demo.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PrincipalControlador {
	
	@GetMapping("/votappG26")
	public String principal() {
		return "/index";
	}
	
	@GetMapping("/partido")
	public String partidoPol() {
		return "/partidoX";
	}

}
