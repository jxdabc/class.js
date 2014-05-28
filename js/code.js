$(function(){

	SyntaxHighlighter.defaults['toolbar'] = false;

	$('.code pre').each(function(i,e){
		var $e = $(e);
		var url = $e.data('code');
		$.get(url, function(code){
//			console.log(code);
			$e.text(code);
			SyntaxHighlighter.highlight(undefined, e);
		});
	});

});