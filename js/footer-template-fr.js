function loadFooterFR(currentPagePath) {

    let basePath = currentPagePath;
    
    if (basePath === '.') {
        basePath = ''; 
    } else if (basePath.slice(-1) !== '/' && basePath !== '') {
        basePath += '/';
    }
  
    const legalHref = `${basePath}mentions-legales/`;
    const privacyHref = `${basePath}politique-de-confidentialité/`;

    const mapsUrl = "https://maps.app.goo.gl/t14Qa5Xsys2KH4Tp7";
    
    const footerHTML = `
        <footer class="bg-muted/30 border-t border-border mt-auto" data-source-file="src/components/common/Footer.tsx" data-source-line-start="71" data-source-line-end="180">
            <div class="container-custom py-12 md:py-16" data-source-file="src/components/common/Footer.tsx" data-source-line-start="72" data-source-line-end="179">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" data-source-file="src/components/common/Footer.tsx" data-source-line-start="73" data-source-line-end="164">
                    <div class="space-y-4" data-source-file="src/components/common/Footer.tsx" data-source-line-start="75" data-source-line-end="104">
                        <div class="flex items-center space-x-2" data-source-file="src/components/common/Footer.tsx" data-source-line-start="76" data-source-line-end="81">
                            <img src="${basePath}../assets/logo/paca_depanne-logo.svg" alt="Logo Paca Dépanne" style="width: 144px; height: 144px;" />
                        </div>
                        <p class="text-sm text-muted-foreground" data-source-file="src/components/common/Footer.tsx" data-source-line-start="82" data-source-line-end="84">Votre expert en climatisation, ventilation et plomberie dans la région PACA.</p>
                        <div class="flex items-center gap-2" data-source-file="src/components/common/Footer.tsx" data-source-line-start="85" data-source-line-end="103">
                            <a rel="noopener noreferrer" aria-label="Facebook" data-source-file="src/components/common/Footer.tsx" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook h-4 w-4" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a rel="noopener noreferrer" aria-label="LinkedIn" data-source-file="src/components/common/Footer.tsx" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-4 w-4" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a rel="noopener noreferrer" aria-label="Email" data-source-file="src/components/common/Footer.tsx" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg></a>
                        </div>
                    </div>
                    <div data-source-file="src/components/common/Footer.tsx" data-source-line-start="107" data-source-line-end="121">
                        <h4 class="font-semibold mb-4">Nos Services</h4>
                        <ul class="space-y-2">
                            <li data-source-file="src/components/common/Footer.tsx" data-source-line-start="111" data-source-line-end="118"><a href="${basePath}climatisation/" class="text-sm text-muted-foreground hover:text-primary transition-colors">Climatisation</a></li>
                            <li data-source-file="src/components/common/Footer.tsx" data-source-line-start="111" data-source-line-end="118"><a href="${basePath}ventilation/" class="text-sm text-muted-foreground hover:text-primary transition-colors">Ventilation</a></li>
                            <li data-source-file="src/components/common/Footer.tsx" data-source-line-start="111" data-source-line-end="118"><a href="${basePath}plomberie/" class="text-sm text-muted-foreground hover:text-primary transition-colors">Plomberie</a></li>
                        </ul>
                    </div>
                    <div data-source-file="src/components/common/Footer.tsx" data-source-line-start="124" data-source-line-end="138">
                        <h4 class="font-semibold mb-4">Entreprise</h4>
                        <ul class="space-y-2">
                            <li data-source-file="src/components/common/Footer.tsx" data-source-line-start="128" data-source-line-end="135"><a href="${basePath}" class="text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
                        </ul>
                    </div>
                    <div data-source-file="src/components/common/Footer.tsx" data-source-line-start="141" data-source-line-end="163">
                        <h4 class="font-semibold mb-4">Contact</h4>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-2">
                                <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <span>Région PACA, France</span>
                                </a>
                            </li>
                            <li class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg><span class="text-sm text-muted-foreground hover:text-primary transition-colors">+33 4 91 XX XX XX</span></li>
                            <li class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg><span class="text-sm text-muted-foreground hover:text-primary transition-colors">contact@pacadepanne.fr</span></li>
                        </ul>
                    </div>
                </div>
                <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8"></div>
                <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2025 Paca Dépanne. Tous droits réservés.</p>
                    <div class="flex gap-6">
                        <a href="${legalHref}" class="hover:text-primary transition-colors">Mentions Légales</a>
                        <a href="${privacyHref}" class="hover:text-primary transition-colors">Politique de Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    `;

    document.addEventListener('DOMContentLoaded', () => {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
        } else {
            console.error("Element with ID 'footer-placeholder' not found.");
        }
    });
}