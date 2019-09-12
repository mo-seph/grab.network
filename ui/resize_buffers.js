outlets = 1;
inlets = 1;

num = 8;

function loadbang() {
	this.bang();
}

function bang() {
	if ( this.patcher.box ) {
		rec = this.patcher.box.rect;
		width = rec[2]-rec[0];
		height = rec[3]-rec[1];
		buf_height = Math.floor(height / num);

		for( i = 0; i < num; i++ ) {
			id = i + 1;
			x1 = 0;
			y1 = i*buf_height;
			x2 = width;
			y2 = buf_height;
			this.patcher.message("script", "sendbox", "buffer_"+id, 'presentation_rect', x1, y1, x2, y2);
			//outlet(0,i,x1, y1, x2, y2);
		}
	}
}