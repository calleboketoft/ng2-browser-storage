System.config({
    baseURL: '/',
    warnings: true,
    map: {
        'src': 'src',
        '@angular': '/node_modules/@angular',
        '@ngrx/core': '/node_modules/@ngrx/core',
        '@ngrx/store': '/node_modules/@ngrx/store',
        'rxjs': 'node_modules/rxjs'
    },
    packages: {
        '': { defaultExtension: 'js' },
        'src': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        '@ngrx/core': { defaultExtension: 'js', main: 'indexjs' },
        '@ngrx/store': { defaultExtension: 'js', main: 'index.js' },
        '@angular/common': { defaultExtension: 'js', main: 'index.js' },
        '@angular/compiler': { defaultExtension: 'js', main: 'index.js' },
        '@angular/core': { defaultExtension: 'js', main: 'index.js' },
        '@angular/forms': { defaultExtension: 'js', main: 'index.js' },
        '@angular/http': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser-dynamic': { defaultExtension: 'js', main: 'index.js' },
        '@angular/router': { defaultExtension: 'js', main: 'index.js' },
        '@angular/router-deprecated': { defaultExtension: 'js', main: 'index.js' },
        '@angular/testing': { defaultExtension: 'js', main: 'index.js' },
        '@angular/upgrade': { defaultExtension: 'js', main: 'index.js' }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtanMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzdGVtanMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDWixPQUFPLEVBQUUsR0FBRztJQUNaLFFBQVEsRUFBRSxJQUFJO0lBQ2QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFLEtBQUs7UUFDWixVQUFVLEVBQUUsd0JBQXdCO1FBQ3BDLFlBQVksRUFBRSwwQkFBMEI7UUFDeEMsYUFBYSxFQUFFLDJCQUEyQjtRQUMxQyxNQUFNLEVBQUUsbUJBQW1CO0tBQzVCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDO1FBQzVCLEtBQUssRUFBRSxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBQztRQUMvQixNQUFNLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUM7UUFDaEMsWUFBWSxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7UUFDdkQsYUFBYSxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7UUFDekQsaUJBQWlCLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztRQUM3RCxtQkFBbUIsRUFBRSxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1FBQy9ELGVBQWUsRUFBRSxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1FBQzNELGdCQUFnQixFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7UUFDNUQsZUFBZSxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7UUFDM0QsMkJBQTJCLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztRQUN2RSxtQ0FBbUMsRUFBRSxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1FBQy9FLGlCQUFpQixFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7UUFDN0QsNEJBQTRCLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztRQUN4RSxrQkFBa0IsRUFBRSxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1FBQzlELGtCQUFrQixFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7S0FDL0Q7Q0FDRixDQUFDLENBQUEifQ==