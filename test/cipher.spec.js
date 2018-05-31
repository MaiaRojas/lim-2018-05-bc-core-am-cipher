describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
        assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG" );
     });
     
     it('debería retornar "O V S H" para "H O L A" con offset 33',() =>{
      assert.equal(cipher.decode("O V S H",33),"H O L A"); 
     });
    
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
        assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
     });
     it('debería retornar "H O L A" para "O V S H" con offset 33',() =>{
      assert.equal(cipher.encode("H O L A",33),"O V S H"); 
     }); 
    
     

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.property(cipher.createCipherWithOffset(33),'encode');
      assert.property(cipher.createCipherWithOffset(33),'decode');
    });

  });
});
});
