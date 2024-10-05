import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import EmptyMsg from "../components/EmptyMsg";
import PaidItem from "../components/PaidItem";
const Payment = () => {
  const payments = useSelector((state) => state.payments.payments);

  if (payments.length > 0) {
    return (
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PaidItem
            totalPrice={item.total}
            date={item.date}
            courseDetails={item.courses}
          />
        )}
      />
    );
  }
  return <EmptyMsg text="Pas d'achats à afficher" />;
};

export default Payment;

const styles = StyleSheet.create({});
