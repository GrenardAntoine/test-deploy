package com.clearstream.marketintelligenceapi.country;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("countries")
public class CountryController {
    private CountryService countryService;

    @GetMapping
    public List<Country> findAllCountries () {
        return countryService.findAll();
    }
}
