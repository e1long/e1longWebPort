// Contact Form
function createContactForm() {
    const form = document.createElement("form");
    form.id = "contactForm";

    function createInputField(labelText, inputType, inputId, required = false) {
        const label = document.createElement("label");
        label.for = inputId;
        label.innerText = labelText;

        const input = document.createElement("input");
        input.type = inputType;
        input.id = inputId;
        input.name = inputId;
        if (required) input.required = true;

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
    }

    // Name field
    createInputField("Your Name:", "text", "contactName", true);

    // Email field
    createInputField("Your Email:", "email", "contactEmail", true);

    // Message Field
    const messageLabel = document.createElement("label");
    messageLabel.for = "contactMessage";
    messageLabel.innerText = "Your Message:";

    const message = document.createElement("textarea");
    message.id = "contactMessage";
    message.name = "contactMessage";
    message.rows = 4;
    message.cols = 50;
    message.required = true;

    form.appendChild(messageLabel);
    form.appendChild(message);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    // Preferred Contact Method (Radio Buttons)
    const contactMethodLabel = document.createElement("label");
    contactMethodLabel.innerText = "Preferred Method of Contact:";
    form.appendChild(contactMethodLabel);
    form.appendChild(document.createElement("br"));

    const contactMethods = ["Email", "Phone"];
    contactMethods.forEach(method => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = `contact${method}Method`;
        radioInput.name = "contactMethod";
        radioInput.value = method;
        radioInput.required = true;

        // Event listener for showing/hiding phone number input
        radioInput.addEventListener("change", function() {
            togglePhoneInput(); // Corrected function name
        });

        const radioLabel = document.createElement("label");
        radioLabel.for = `contact${method}Method`;
        radioLabel.innerText = method;

        form.appendChild(radioInput);
        form.appendChild(radioLabel);
        form.appendChild(document.createElement("br"));
    });

    form.appendChild(document.createElement("br"));

    // Phone Number Input (conditional input)
    const phoneNumberDiv = document.createElement("div");
    phoneNumberDiv.id = "phoneNumberDiv";
    phoneNumberDiv.style.display = "none"; // Hidden by default

    const phoneLabel = document.createElement("label");
    phoneLabel.for = "contactPhoneNumber";
    phoneLabel.innerText = "Your Phone Number:";

    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.id = "contactPhoneNumber";
    phoneInput.name = "contactPhoneNumber";
    phoneInput.pattern = "[0-9]{10}";
    phoneInput.placeholder = "1234567890"; // Placeholder text

    phoneNumberDiv.appendChild(phoneLabel);
    phoneNumberDiv.appendChild(phoneInput);
    form.appendChild(phoneNumberDiv);

    // Append the form to the container
    document.getElementById("formContainer").appendChild(form);

    // Event listener for submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Submission code here
    });
}

// Function to toggle phone input visibility (move outside to make it globally accessible)
function togglePhoneInput() {
    const isPhoneSelected = document.getElementById("contactPhoneMethod").checked;
    const phoneNumberDiv = document.getElementById("phoneNumberDiv");
    phoneNumberDiv.style.display = isPhoneSelected ? "block" : "none";
}

// Create the contact form
createContactForm();
