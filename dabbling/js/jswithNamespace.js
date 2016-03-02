/**
 * Created by sneha_000 on 3/1/2016.
 */
var math = (function()
    {
        var api = {
            add : add,
            subtract: subtract
        };

        return api;

        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }
    }
)();

(function(math)
{
    alert(math.add(2,3));
})(math);