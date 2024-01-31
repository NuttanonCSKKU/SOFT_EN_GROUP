<form action="{$form_action}" method="post" enctype="multipart/form-data">
    <!-- Add form fields here -->
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="file" name="document" accept=".pdf, .doc, .docx" required>
    <button type="submit">Submit</button>
</form>
