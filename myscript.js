//credit goes to Steven Frank of Butt to Butt (https://github.com/panicsteve/butt-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bnancy\b/g, "taylor");
	v = v.replace(/\bnancy's\b/g, "taylor's");
	v = v.replace(/\bNancy\b/g, "Taylor");
	v = v.replace(/\bScones\b/g, "Caaaaarbs");
	v = v.replace(/\bBuns\b/g, "Caaaaarbs");
	v = v.replace(/\bspaghetti\b/g, "caaaaarbs");
	
	textNode.nodeValue = v;
}
