const SERVER_URL = "http://127.0.0.1:5000";

async function handleSubmit(hawkID, date, amount, receipt, description) {
  const formData = new FormData();

  formData.append("hawkID", hawkID);
  formData.append("date", date);
  formData.append("amount", amount);
  formData.append("receipt", receipt);
  formData.append("description", description);

  try {
    const response = await fetch(`${SERVER_URL}/api/submitReimbursement`, {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      // If response is 200, no need to do anything.
    } else if (response.status === 400) {
      throw new Error("Bad Request");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else {
      throw new Error("Unknown Error");
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    throw err;
  }
}

export { handleSubmit };
