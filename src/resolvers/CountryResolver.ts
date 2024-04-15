import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";
import Country from "../entities/Country/country";
import { CreateOrUpdateCountry } from "../entities/Country/country.args";

@Resolver()
export class CountryResolver {
    @Mutation(() => Country)
    createCountry(@Args() args: CreateOrUpdateCountry) {
      return Country.createCountry({ ...args});
    }

    @Query(() => [Country])
    getCountries() {
        return Country.getCountries();
    }
    
    @Query(() => [Country])
    getCountriesByContinent(@Arg("continent") continent: string) {
        return Country.getCountriesByContinent(continent);
    }
    
    @Query(() => Country)
    getCountry(@Arg("code") code: string) {
        return Country.getCountryByCode(code);
    }

    @Mutation(() => Country)
    deletecountry(@Arg("id", () => ID) id: string, code: string) {
        return Country.deleteCountry(id, code);
    }
}