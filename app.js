function submitbtn(message) {
    Swal.fire({
        title: "Are you sure?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Submit it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Submit!",
            text: "Your form has been Submited.",
            icon: "success"
          });
        }
      });
}

