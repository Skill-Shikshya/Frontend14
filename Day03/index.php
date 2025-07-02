<?php
// Check if form was submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Get the submitted data
    $firstName = $_POST['frist-name'] ?? '';
    $lastName = $_POST['last-name'] ?? '';
    
    // Display the submitted data
    echo "<h2>Form Submission Results</h2>";
    echo "<p><strong>First Name:</strong> " . htmlspecialchars($firstName) . "</p>";
    echo "<p><strong>Last Name:</strong> " . htmlspecialchars($lastName) . "</p>";
    
    // Optional: Check if fields are empty
    if (empty($firstName) || empty($lastName)) {
        echo "<p style='color: red;'>Warning: Some fields were left empty.</p>";
    }
    
} else {
    // If accessed directly without POST data
    echo "<p>No form data received. Please submit the form first.</p>";
}
?>