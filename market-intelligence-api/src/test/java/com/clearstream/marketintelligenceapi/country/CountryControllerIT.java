package com.clearstream.marketintelligenceapi.country;

import org.assertj.core.internal.bytebuddy.utility.RandomString;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@Transactional
public class CountryControllerIT {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private EntityManager em;

    @Test
    void findAll() throws Exception {
        Country country = getSavedMockCountry(em);

        mockMvc.perform(get("/countries"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$.[0].id", notNullValue()))
                .andExpect(jsonPath("$.[0].code", equalTo(country.getCode())))
                .andExpect(jsonPath("$.[0].name", equalTo(country.getName())));
    }

    public static Country getSavedMockCountry(EntityManager em) {
        Country country = Country.builder()
                .code(new RandomString(3).nextString())
                .name(new RandomString(15).nextString())
                .build();
        em.persist(country);
        return country;
    }
}
