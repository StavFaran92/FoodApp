import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import BusinessList from "../components/BusinessList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useBusinesses();

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi({ term })}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessList results={filterByPrice("$")} title="Cheap" />
        <BusinessList results={filterByPrice("$$")} title="medium" />
        <BusinessList results={filterByPrice("$$$")} title="expensive" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
