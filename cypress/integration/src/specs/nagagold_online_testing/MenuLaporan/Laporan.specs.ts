import { SideMenuNagagold } from "../../../page-objects/side-menu-nagagold.page";
const sidemenu = new SideMenuNagagold();

import Config from '../../../../../fixtures/config.json';
const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const url = Config['data-url']["qc-nagatech"];

describe('LaporanBarang', () => {
    beforeEach(() => {
        cy.LoginWithSession(user_id, password, url);
    });
    it('Running', () => {
        cy.visit('/Dashboard');
    sidemenu.changeMenuLaporanBarang("false");
    cy.wait(400);
    cy.visit('/laporan-barang-detail');
    sidemenu.changeMenuLaporanBarangDetail("true");
    cy.wait(400);
    cy.visit('/laporan-barang-acc');
    sidemenu.changeMenuLaporanBarangACC("true");
    cy.wait(400);
    cy.visit('/laporan-tambah-barang');
    sidemenu.changeMenuLaporanTambahBarang("true");




    });
})