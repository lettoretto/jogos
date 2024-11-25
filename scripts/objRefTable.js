const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.Compare
	];
};
self.C3_JsPropNameTable = [
	{Projétil: 0},
	{munição: 0},
	{Teclado: 0},
	{bestminecraftbackgrounday2byb89u8jk0h0v: 0},
	{Sólido: 0},
	{chao: 0},
	{cavernanaturalnofundodafloresta_: 0},
	{lava: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{jogador: 0},
	{Senóide: 0},
	{inimigo1: 0},
	{inimigo2: 0},
	{inimigo3: 0},
	{inimigo4: 0},
	{inimigo5: 0},
	{inimigo6: 0},
	{inimigo7: 0}
];

self.InstanceType = {
	munição: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	bestminecraftbackgrounday2byb89u8jk0h0v: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	cavernanaturalnofundodafloresta_: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	inimigo1: class extends self.ISpriteInstance {},
	inimigo2: class extends self.ISpriteInstance {},
	inimigo3: class extends self.ISpriteInstance {},
	inimigo4: class extends self.ISpriteInstance {},
	inimigo5: class extends self.ISpriteInstance {},
	inimigo6: class extends self.ISpriteInstance {},
	inimigo7: class extends self.ISpriteInstance {}
}