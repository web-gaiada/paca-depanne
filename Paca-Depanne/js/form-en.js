const servicesListEN = [
    { value: "Heating", label: "Heating" },
    { value: "Ventilation", label: "Ventilation" },
    { value: "Plumbing", label: "Plumbing" },
    { value: "Other", label: "Other" }
];

async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const button = form.querySelector('button[type="submit"]');
    const formContainer = form.closest('#contact-form-placeholder');

    const data = new FormData(form);
    const formEndpoint = form.action;
    button.disabled = true;
    button.innerHTML = 'Sending...';

    try {
        const response = await fetch(formEndpoint, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            displaySuccessMessage(formContainer);
        } else {
            const errorData = await response.json();
            console.error('Web3Forms Error:', errorData);
            displayErrorMessage(formContainer);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        displayErrorMessage(formContainer);
    } finally {
        if (button.disabled) {
        }
    }
}

function displaySuccessMessage(container) {
    const successHTML = `
        <div class="text-center p-8 border border-green-500 bg-green-50 rounded-lg">
            <h3 class="text-2xl font-bold text-green-700 mb-2">✅ Request Sent Successfully!</h3>
            <p class="text-gray-700">Thank you for your message. Our team will contact you shortly (usually within 24 hours) to discuss your quote.</p>
        </div>
    `;
    container.innerHTML = successHTML;
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function displayErrorMessage(container) {
    const errorHTML = `
        <div class="text-center p-8 border border-red-500 bg-red-50 rounded-lg">
            <h3 class="text-2xl font-bold text-red-700 mb-2">❌ Submission Error</h3>
            <p class="text-gray-700">Sorry, an error occurred while sending your form. Please try again or contact us directly by phone.</p>
            <button class="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-4" onclick="window.location.reload()">Reload page</button>
        </div>
    `;
    const form = container.querySelector('form');
    if (form) {
        form.innerHTML = errorHTML;
    } else {
        container.innerHTML = errorHTML;
    }
}

function generateOptionsCustom(currentService) {
    return servicesListEN.map(item => {
        const isActive = item.value === currentService;
        const activeClass = isActive ? 'custom-option-active' : 'hover:bg-muted/50';
        const checkmark = isActive ? '<span class="active-check">✓</span>' : '';

        return `
            <li class="custom-option-item ${activeClass}" 
                data-value="${item.value}">
                ${item.label}
                ${checkmark}
            </li>
        `;
    }).join('');
}

function createContactForm(currentService) {
    
    const activeService = currentService || ""; 
    const formEndpoint = "https://api.web3forms.com/submit"; 
    const defaultLabel = 'Select a service';
    const selectedLabelText = activeService || defaultLabel;

    const formHTML = `
        <form 
            action="${formEndpoint}" 
            method="POST" 
            accept-charset="UTF-8" 
            class="space-y-6" 
            id="main-contact-form" 
            data-source-line-start="70" data-source-line-end="162">
            
            <input type="hidden" name="access_key" value="6540fb96-dadc-4354-b343-278e92139a81">
            <input type="hidden" name="_recipient" value="arieangga001@gmail.com">
            <input type="hidden" name="_subject" value="New Service Request: ${selectedLabelText}">
            <input type="hidden" name="_honeypot" value="">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="form-nom-complet">Full Name</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="John Doe" name="Nom_Complet" id="form-nom-complet" required>
                </div>
                
                <div class="space-y-2">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="form-telephone">Phone</label>
                    <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="+33 1 23 45 67 89" name="Telephone" id="form-telephone" required>
                </div>
            </div>
            
            <div class="space-y-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="form-email">Email</label>
                <input type="email" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="john.doe@example.com" name="email" id="form-email" required>
            </div>
            
            <div class="space-y-2 relative custom-dropdown-wrapper">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="custom-select-button">Service Requested</label>
                
                <button type="button" id="custom-select-button" data-active-value="${activeService}" 
                        class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm cursor-pointer custom-select-trigger">
                    
                    <span class="custom-selected-label">
                        ${selectedLabelText}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50"><path d="m6 9 6 6 6-6"></path></svg>
                </button>
                
                <div id="custom-select-menu" class="custom-select-menu">
                    <ul class="custom-options-list">
                        ${generateOptionsCustom(activeService)}
                    </ul>
                </div>

                <input type="hidden" name="Service_Demandé" value="${activeService}" id="hidden-service-input">
            </div>
            <div class="space-y-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="form-message">Message</label>
                <textarea 
                    class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[120px]" 
                    placeholder="Describe your needs..." 
                    name="Message" id="form-message" required></textarea>
            </div>
            
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8 w-full md:w-auto" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-4 h-4 mr-2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Send Request
            </button>
        </form>
    `;
    
    return `<div class="p-6 pt-0">${formHTML}</div>`;
}

function attachDropdownListeners() {
    document.querySelectorAll('.custom-dropdown-wrapper').forEach(wrapper => {
        const trigger = wrapper.querySelector('#custom-select-button');
        const menu = wrapper.querySelector('.custom-select-menu');
        const hiddenInput = wrapper.querySelector('#hidden-service-input');
        const selectedLabel = wrapper.querySelector('.custom-selected-label');
        
        if (!trigger || !menu || !hiddenInput) return;

        trigger.addEventListener('click', (e) => { 
            e.preventDefault(); 
            e.stopPropagation(); 

            wrapper.classList.toggle('open');
            
            document.querySelectorAll('.custom-dropdown-wrapper.open').forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove('open');
                }
            });
        });

        menu.querySelectorAll('.custom-option-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation(); 
                
                const newValue = item.getAttribute('data-value');
                const newLabel = item.textContent.trim().replace('✓', '').trim();

                hiddenInput.value = newValue;
                selectedLabel.textContent = newLabel;
                
                menu.querySelectorAll('.custom-option-item').forEach(li => {
                    li.classList.remove('custom-option-active');
                    li.querySelector('.active-check')?.remove();
                });
                item.classList.add('custom-option-active');
                item.innerHTML = newLabel + '<span class="active-check">✓</span>';
                
                wrapper.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target) && wrapper.classList.contains('open')) {
                wrapper.classList.remove('open');
            }
        });
    });
}

function initializeContactFormEN(serviceOverride = null) {
    const activeService = serviceOverride || ""; 
    const placeholder = document.getElementById('contact-form-placeholder');
    
    if (placeholder) {
        const formHtml = createContactForm(activeService);
        placeholder.innerHTML = formHtml;

        attachDropdownListeners(); 
        
        const form = placeholder.querySelector('form');
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
    } 
}

window.initializeContactFormEN = initializeContactFormEN;