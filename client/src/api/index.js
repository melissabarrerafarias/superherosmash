export const createPaymentIntent = (items) => {
    return fetch("/api/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items})
      }).then(res => res.json());
}