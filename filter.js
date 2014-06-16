angular.module('klrFilters',[]).filter('ordinal', function() {
    return function(input) {
        var number = input || '';
        var suffix = "";
        
        if (number % 100 > 10 && number %100 < 14)
            suffix = "th";
        else
            switch(number % 10)
            {
    
                case 0:
                    suffix = "th";
                    break;
    
                case 1:
                    suffix = "st";
                    break;
    
                case 2:
                    suffix = "nd";
                    break;
    
                case 3:
                    suffix = "rd";
                    break;
    
                default:
                    suffix = "th";
                    break;
            }
    
        return number+suffix;
    };
});
