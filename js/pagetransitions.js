var PageTransitions = (function() {
    var $main = $('#pt-main'),
        $pages = $main.children('article.pt-page'),
        animcursor = 1,
        pagesCount = $pages.length,
        current = 0,
        isAnimating = false,
        endCurrPage = false,
        endNextPage = false,
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
        // support css animations
        support = Modernizr.cssanimations;
    $pages.each(function() {
        var $page = $(this);
        $page.data('originalClassList', $page.attr('class'));
    });
    $pages.eq(current).addClass('pt-page-current');
})();

// ————————————————————————————– //
// VARIABLES
// ————————————————————————————– //
var $main = $('#pt-main'),
    $pages = $main.children('article.pt-page'),
    $iterate = $('.page-transition'), // <– ID for my button
    pagesCount = $pages.length,
    current = 0,
    isAnimating = false,
    endCurrPage = false,
    endNextPage = false,
    animEndEventNames = {
        'WebkitAnimation': 'webkitAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
        'animation': 'animationend'
    },
    // animation end event name
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    // support css animations
    support = Modernizr.cssanimations;

function onEndAnimation($outpage, $inpage) {
    endCurrPage = false;
    endNextPage = false;
    resetPage($outpage, $inpage);
    isAnimating = false;
}

function resetPage($outpage, $inpage) {
    $outpage.attr('class', $outpage.data('originalClassList'));
    $inpage.attr('class', $inpage.data('originalClassList') + ' pt-page-current');
}

// ————————————————————————————– //
// gotoPageWithTrans1(x) 
// ————————————————————————————– //
function gotoPageWithTrans1(pageNumber) {
    if (isAnimating) {
        return false;
    }
    isAnimating = true;
    var $currPage = $pages.eq(current);
    if (current != pageNumber) {
        current = pageNumber;
    }
    var $prevPage = $pages.eq(current).addClass('pt-page-current'),
        outClass = 'pt-page-moveToLeft pt-page-ontop',
        inClass = 'pt-page-scaleUp';
    $prevPage.scrollTop(0);
    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    $prevPage.addClass(inClass).on(animEndEventName, function() {
        $prevPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    if (!support) {
        onEndAnimation($currPage, $prevPage);
    }
}

// ————————————————————————————– //
// gotoPageWithTrans2(x) 
// ————————————————————————————– //
function gotoPageWithTrans2(pageNumber) {
    if (isAnimating) {
        return false;
    }
    isAnimating = true;
    var $currPage = $pages.eq(current);
    if (current != pageNumber) {
        current = pageNumber;
    }
    var $prevPage = $pages.eq(current).addClass('pt-page-current'),
        outClass = 'pt-page-scaleDown',
        inClass = 'pt-page-moveFromLeft pt-page-ontop';
    $prevPage.scrollTop(0);
    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    $prevPage.addClass(inClass).on(animEndEventName, function() {
        $prevPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    if (!support) {
        onEndAnimation($currPage, $prevPage);
    }
}

// ————————————————————————————– //
// gotoPageWithTrans3(x) 
// ————————————————————————————– //
function gotoPageWithTrans3(pageNumber) {
    if (isAnimating) {
        return false;
    }
    isAnimating = true;
    var $currPage = $pages.eq(current);
    if (current != pageNumber) {
        current = pageNumber;
    }
    var $prevPage = $pages.eq(current).addClass('pt-page-current'),
        outClass = 'pt-page-moveToRight',
        inClass = 'pt-page-moveFromLeft';
    $prevPage.scrollTop(0);
    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    $prevPage.addClass(inClass).on(animEndEventName, function() {
        $prevPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    if (!support) {
        onEndAnimation($currPage, $prevPage);
    }
}

// ————————————————————————————– //
// gotoPageWithTrans4(x) 
// ————————————————————————————– //
function gotoPageWithTrans4(pageNumber) {
    if (isAnimating) {
        return false;
    }
    isAnimating = true;
    var $currPage = $pages.eq(current);
    if (current != pageNumber) {
        current = pageNumber;
    }
    var $prevPage = $pages.eq(current).addClass('pt-page-current'),
        outClass = 'pt-page-moveToTop pt-page-ontop',
        inClass = 'pt-page-scaleUp';
    $prevPage.scrollTop(0);
    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    $prevPage.addClass(inClass).on(animEndEventName, function() {
        $prevPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    if (!support) {
        onEndAnimation($currPage, $prevPage);
    }
}

// ————————————————————————————– //
// gotoPageWithTrans5(x) 
// ————————————————————————————– //
function gotoPageWithTrans5(pageNumber) {
    if (isAnimating) {
        return false;
    }
    isAnimating = true;
    var $currPage = $pages.eq(current);
    if (current != pageNumber) {
        current = pageNumber;
    }
    var $prevPage = $pages.eq(current).addClass('pt-page-current'),
        outClass = 'pt-page-moveToBottom pt-page-ontop',
        inClass = 'pt-page-scaleUp';
    $prevPage.scrollTop(0);
    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    $prevPage.addClass(inClass).on(animEndEventName, function() {
        $prevPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    if (!support) {
        onEndAnimation($currPage, $prevPage);
    }
}

// ————————————————————————————– //
// gotoPageWithTrans6(x) 
// ————————————————————————————– //
function gotoPageWithTrans6(pageNumber) {
    if (isAnimating) {
        return false;
    }
    isAnimating = true;
    var $currPage = $pages.eq(current);
    if (current != pageNumber) {
        current = pageNumber;
    }
    var $prevPage = $pages.eq(current).addClass('pt-page-current'),
        outClass = 'pt-page-scaleDownUp',
        inClass = 'pt-page-scaleUp pt-page-delay300';
    $prevPage.scrollTop(0);
    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    $prevPage.addClass(inClass).on(animEndEventName, function() {
        $prevPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    if (!support) {
        onEndAnimation($currPage, $prevPage);
    }
}

// ————————————————————————————– //
// gotoPageWithTrans7(x) 
// ————————————————————————————– //
function gotoPageWithTrans7(pageNumber) {
    if (isAnimating) {
        return false;
    }
    isAnimating = true;
    var $currPage = $pages.eq(current);
    if (current != pageNumber) {
        current = pageNumber;
    }
    var $prevPage = $pages.eq(current).addClass('pt-page-current'),
        outClass = 'pt-page-scaleDown',
        inClass = 'pt-page-scaleUpDown pt-page-delay300';
    $prevPage.scrollTop(0);
    $currPage.addClass(outClass).on(animEndEventName, function() {
        $currPage.off(animEndEventName);
        endCurrPage = true;
        if (endNextPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    $prevPage.addClass(inClass).on(animEndEventName, function() {
        $prevPage.off(animEndEventName);
        endNextPage = true;
        if (endCurrPage) {
            onEndAnimation($currPage, $prevPage);
        }
    });
    if (!support) {
        onEndAnimation($currPage, $prevPage);
    }
}