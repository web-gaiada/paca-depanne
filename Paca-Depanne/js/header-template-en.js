const EN_NAV_MAP = {
    'accueil': { text: 'Welcome', href: 'index.html', slug: 'index' }, 
    'climatisation': { text: 'Heating', href: 'heating/', slug: 'heating' },
    'ventilation': { text: 'Ventilation', href: 'ventilation/', slug: 'ventilation' },
    'plomberie': { text: 'Plumbing', href: 'plumbing/', slug: 'plumbing' }
};

/**
 * @param {string} basePath
 * @param {object} navItem
 * @param {string} activePage
 * @returns {string}
 */
function getNavLinkEN(basePath, navItem, activePage) {
    const cleanActivePage = activePage.toLowerCase().trim();
    const activeClass = (navItem.slug === cleanActivePage)
        ? 'bg-primary text-primary-foreground'
        : 'text-foreground hover:bg-muted';

    const linkHref = (navItem.slug === 'index') ? '' : navItem.href;

    return `
        <a href="${basePath}${navItem.href}" class="px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeClass}">${navItem.text}</a>
    `;
}

/**
 * @param {string} activePage
 * @param {string} rootPath
 * @returns {string}
 */
function getLangSwitchPathEN(activePage, rootPath) {
    const ABSOLUTE_ROOT_PATH = '/Paca-Depanne/'; 

    let frPageSlug = '';
    switch (activePage.toLowerCase()) {
        case 'welcome':
        case 'index':
            frPageSlug = 'index.html';
            break;
        case 'heating':
            frPageSlug = 'climatisation/index.html';
            break;
        case 'ventilation':
            frPageSlug = 'ventilation/index.html';
            break;
        case 'plumbing':
            frPageSlug = 'plomberie/index.html';
            break;
        default:
            frPageSlug = 'index.html';
    }

    return `${ABSOLUTE_ROOT_PATH}fr/${frPageSlug}`;
}

/**
 * @param {string} currentPagePath
 * @param {string} activePage
 */
function loadHeaderEN(currentPagePath, activePage) {
    let rootPath = currentPagePath;
    
    if (rootPath === '.') {
        rootPath = '';
    } else if (rootPath.slice(-1) !== '' && rootPath !== '') {
        if (!rootPath.endsWith('/') && rootPath !== '') {
            rootPath += '/';
        }
    }

    const homePath = (rootPath === '') ? './' : rootPath;
    const frSwitchHref = getLangSwitchPathEN(activePage, rootPath);
    
    const headerHTML = `
        <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background backdrop-blur-sm border-b border-border shadow-sm">
            <div class="container-custom">
                <div class="flex items-center justify-between h-16 md:h-20">
                    
                    <a href="${homePath}" class="flex items-center space-x-2 group">
                        <span class="text-xl font-bold">Paca Dépanne</span>
                    </a>
                    
                    <div class="hidden md:flex flex-1 justify-center">
                        <nav class="flex items-center space-x-1"> 
                            ${getNavLinkEN(rootPath, EN_NAV_MAP.accueil, activePage)} 
                            ${getNavLinkEN(rootPath, EN_NAV_MAP.climatisation, activePage)}
                            ${getNavLinkEN(rootPath, EN_NAV_MAP.ventilation, activePage)}
                            ${getNavLinkEN(rootPath, EN_NAV_MAP.plomberie, activePage)}
                        </nav>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <a href="${frSwitchHref}" 
                           class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-primary bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md">
                            FR
                        </a>
                    </div>
                    
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
        console.error("Element with ID 'header-placeholder' not found.");
    }
}