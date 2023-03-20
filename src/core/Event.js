function SMEvent( i )
{
    const inst = i;

    this.getInstance = function()
    {
        return inst;
    };
}

SMEvent.prototype.triggerInit = function()
{
    let elem = this.getInstance().getRootElement();
    elem.dispatchEvent( new Event( "init" ) );
};

SMEvent.prototype.triggerStart = function()
{
    let elem = this.getInstance().getRootElement();
    elem.dispatchEvent( new Event( "start" ) );
};

SMEvent.prototype.triggerLoop = function()
{
    let elem = this.getInstance().getRootElement();
    elem.dispatchEvent( new Event( "loop" ) );
};

SMEvent.prototype.triggerPause = function()
{
    let elem = this.getInstance().getRootElement();
    elem.dispatchEvent( new Event( "pause" ) );
};

SMEvent.prototype.triggerResume = function()
{
    let elem = this.getInstance().getRootElement();
    elem.dispatchEvent( new Event( "resume" ) );
};

SMEvent.prototype.triggerUpdate = function()
{
    let elem = this.getInstance().getRootElement();
    elem.dispatchEvent( new Event( "update" ) );
};

export { SMEvent };
