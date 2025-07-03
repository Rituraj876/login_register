function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classlist.remove("active"));
    document.getElementById(formId).classlist.add("active");
}