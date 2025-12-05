const BASE_FR_PATH = '';
// const BASE_EN_PATH_PREFIX = '/paca-depanne/en/';

/**
 * @param {string} 
 * @param {string}
 * @param {string}
 * @param {string}
 * @param {string}
 * @returns {string}
 */
function getNavLink(basePath, href, text, pageName, activePage) {
    const cleanPageName = pageName.toLowerCase().trim();
    const cleanActivePage = activePage.toLowerCase().trim();
    const activeClass = (cleanPageName === cleanActivePage)
        ? 'bg-primary text-primary-foreground'
        : 'text-foreground hover:bg-muted';

    const absoluteHref = `${BASE_FR_PATH}$ `;

    return `
        <a href="${absoluteHref}" class="px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeClass}">${text}</a>
    `;
}

/**
 * @param {string}
 * @param {string}
 * @returns {string}
 */
function getLangSwitchPath(activePage, rootPath) {
    let enPageSlug = '';

    switch (activePage.toLowerCase()) {
        case 'accueil':
        case 'index':
            enPageSlug = 'index.html';
            break;
        case 'climatisation':
            enPageSlug = 'heating/index.html';
            break;
        case 'ventilation':
            enPageSlug = 'ventilation/index.html';
            break;
        case 'plomberie':
            enPageSlug = 'plumbing/index.html';
            break;
        case 'privacy':
            enPageSlug = 'privacy-policy/index.html';
            break;
        case 'legal':
            enPageSlug = 'legal-notice/index.html';
            break;
        default:
            enPageSlug = 'index.html';
    }
    return `${BASE_EN_PATH_PREFIX}${enPageSlug}`;
}

/**
 * @param {string} currentPagePath
 * @param {string} activePage
 */
function loadHeaderFR(currentPagePath, activePage) {
    const enSwitchHref = getLangSwitchPath(activePage, '');
    
    const homeLinkHref = `${BASE_FR_PATH}index.html`;

    const headerHTML = `
        <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background backdrop-blur-sm border-b border-border shadow-sm">
            <div class="container-custom">
                <div class="flex items-center justify-between h-16 md:h-20"> 
                    
                    <a href="${homeLinkHref}" class="flex items-center space-x-2 group">
                        <span class="text-xl font-bold">Paca Dépanne</span>
                    </a>
                    
                    <div class="hidden md:flex flex-1 justify-center">
                        <nav class="flex items-center space-x-1"> 
                            ${getNavLink('', 'index.html', 'Accueil', 'accueil', activePage)}
                            ${getNavLink('', 'climatisation/index.html', 'Climatisation', 'climatisation', activePage)}
                            ${getNavLink('', 'ventilation/index.html', 'Ventilation', 'ventilation', activePage)}
                            ${getNavLink('', 'plomberie/index.html', 'Plomberie', 'plomberie', activePage)}
                        </nav>
                    </div>
                    
                    // <div class="flex items-center space-x-4">
                    //     <a href="${enSwitchHref}" 
                    //         class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-primary bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md">
                    //         EN
                    //     </a>
                    // </div>

                    <button id="burger-button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-transparent shadow-sm active:bg-accent active:text-accent-foreground h-9 w-9 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0R4:" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6 text-foreground" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                    </button>
                </div>
            </div>
        </header>
    `;

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    } else {
        console.error("Element with ID 'header-placeholder' not found. Header failed to load.");
    }
}



