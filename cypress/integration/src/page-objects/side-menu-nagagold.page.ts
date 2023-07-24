export class SideMenuNagagold{

   // Menu Barang
    changeMenuTambahBarang(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(1);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(6)', url, 1, true);
            });
        }
    }
    
    changeMenuDataBarang(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(2);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(6)', url, 2, true);
            });
        }
    }
    changeMenuHancurDataBarang(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(3);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(6)', url, 3, true);
            });
        }
    }

    changeMenuPindahBarang(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(4);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(6)', url, 4, true);
            });
        }
    }

    changeMenuPindahBarangSatuBaki(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(5);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(6)', url, 5, true);  
            });
        }
    }
    changeMenuTimbangBaki(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(6);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(6)', url, 6, true);
            });
        }
    }
    changeMenuTambahDanAmbilStockAksesoris(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(7);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(6)', url, 7, true);
            });
        }
    }
    //Menu Penjualan
    changeMenuTransaksiPenjualan(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(1);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(10)', url, 1, true);
            });
        }
    }
    changeMenuLihatPenjualan(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(2);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(10)', url, 2, true);
            });
        }
    }   
    changeMenuBatalPenjualan(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(3);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(10)', url, 3, true);
            });
        }
    }
    changeMenuLihatTitipan(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(4);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(10)', url, 4, true);
            });
        }
    }
    //Menu Pesanan
    changeMenuTransaksiPesanan(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(1);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(13)', url, 1, true);
            });
        }
    }
    changeMenuAmbilBarangContoh(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(2);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(13)', url, 2, true);
            });
        }
    }
    changeMenuLihatPesanan(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(3);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(13)', url, 3, true);
            });
        }
    }
    //Menu Pembelian
        changeMenuTransaksiPembelian(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(1);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(14)', url, 1, true);
            });
        }
    }
    changeMenuLihatPembelian(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(2);
        }else{
            cy.url().then((url: any) => {
                cy.ChangeMenu(':nth-child(14)', url, 2, true);
            });
        }
    }
    changeMenuHancurPembelian(isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(3);
        }else{
         cy.url().then((url: any) => {
            cy.ChangeMenu(':nth-child(14)', url, 3, true);
        });
    }
}
            changeMenuTransaksiService(isActive: string){
                if(isActive === "true"){
                    cy.ChangeSubMenu(1);
                }else{
            cy.url().then((url: any) => {
            cy.ChangeMenu(':nth-child(15)', url, 1, true);
          });
      }
   }
            changeMenuLihatService(isActive: string){
                if(isActive === "true"){
                    cy.ChangeSubMenu(2);
                 }else{
            cy.url().then((url: any) => {
            cy.ChangeMenu(':nth-child(15)', url, 2, true);
        });
    }
}
        changeMenuTransaksiHutang(isActive: string){
            if(isActive === "true"){
                cy.ChangeSubMenu(1);
        }else{
        cy.url().then((url: any) => {
        cy.ChangeMenu(':nth-child(16)', url, 1, true);
    });
}
}
        changeMenuLihatHutang(isActive: string){
            if(isActive === "true"){
                cy.ChangeSubMenu(2);
            }else{
        cy.url().then((url: any) => {
        cy.ChangeMenu(':nth-child(16)', url, 2, true);
      });
  }
}
        changeMenuBatalHutangLunas(isActive: string){
            if(isActive === "true"){
                cy.ChangeSubMenu(3);
             }else{
        cy.url().then((url: any) => {
        cy.ChangeMenu(':nth-child(16)', url, 3, true);
         });
    }
}
        changeMenuUangKas(isActive: string){
             if(isActive === "true"){
        }else{
         cy.url().then((url: any) => {
            cy.get(':nth-child(17)', true);
        });
    }
}
        changeMenuUangBank(isActive: string){
            if(isActive === "true"){
        }else{
            cy.ChangeSubMenu(1);

        cy.url().then((url: any) => {
            cy.get(':nth-child(18)',url,1 ,true);
        });
    }
}
        changeMenuGesekTunai(isActive: string){
            if(isActive === "true"){
        }else{
            cy.ChangeSubMenu(1);

        cy.url().then((url: any) => {
            cy.get(':nth-child(19)',url,1 ,true);
        });
    }
}
        changeMenuValidasiJualBeli   (isActive: string){
            if(isActive === "true"){
                cy.ChangeSubMenu(1);
        }else{
        cy.url().then((url: any) => {
        cy.ChangeMenu(':nth-child(21)', url, 1, true);
    });
}
}
        changeMenuValidasiHutang(isActive: string){
            if(isActive === "true"){
                cy.ChangeSubMenu(2);
            }else{
        cy.url().then((url: any) => {
        cy.ChangeMenu(':nth-child(21)', url, 2, true);
      });
  }
}
        changeMenuPengalihanSaldoUang(isActive: string){
            if(isActive === "true"){
                cy.ChangeSubMenu(3);
             }else{
        cy.url().then((url: any) => {
        cy.ChangeMenu(':nth-child(21)', url, 3, true);
    });
}
}
    changeMenuLaporanBarang   (isActive: string){
        if(isActive === "true"){
            cy.ChangeSubMenu(1);
    }else{
        cy.url().then((url: any) => {
        cy.ChangeMenu(':nth-child(23)', url, 1, true);
    });
}
}
    changeMenuLaporanBarangDetail(isActive: string){
        if(isActive === "true"){
         }else{
         cy.url().then((url: any) => {
        cy.get(':nth-child(23)', true);
         });
    }
}
        changeMenuLaporanBarangACC(isActive: string){
            if(isActive === "true"){
        }else{
            cy.ChangeSubMenu(2);

        cy.url().then((url: any) => {
            cy.get(':nth-child(23)',url,2 ,true);
        });
    }
}
        changeMenuLaporanTambahBarang(isActive: string){
            if(isActive === "true"){
        }else{
            cy.ChangeSubMenu(3);

        cy.url().then((url: any) => {
            cy.get(':nth-child(23)',url,3 ,true);
        });
    }
}
            changeMenuLaporanPesanan(isActive: string){
                if(isActive === "true"){
                }else{
                    cy.ChangeSubMenu(3);
                    cy.url().then((url: any) => {
                    cy.get(':nth-child(23)',url,3 ,true);
                    

        });
        }
    }
}
