async function handleSubmit(e) {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "Teacher_class_app");
        const dataRes = await axios.post(
          "cloudinary://386482126368168:9nE0OBIUr0eFQ9LBHz9X4miTXMg@dcja8kinx",
          formData
        );
        imageUrl = dataRes.data.url;
      }

      const submitPost = {
        image: imageUrl,
      };
      console.log(selectedCommunity);
      await axios.post("https://teacher-app.onrender.com/store-image", submitPost);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Add Image</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.File
                    className="position-relative mt-2"
                    name="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    id="validationFormik107"
                    feedbackTooltip
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </>
      </div>
    </Container>
  );