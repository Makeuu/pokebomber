/* Structure
{
  _id : #,
  gameID : #,
  userID : #,
  time : #,                     => L'heure � la reception 
  action : "move"/"bombe",      => L'action demand�e
  param  : {                    => Param de l'action move
    from : {x:#, y:#},
    to   : {x:#, y:#}
  }
}
*/