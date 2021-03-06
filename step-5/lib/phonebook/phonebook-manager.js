/**
Copyright 2017 LGS Innovations

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
(() => {
  'use strict';

  class PhonebookManager{
    constructor(contactsManager) {
      this._contactsManager = contactsManager;
    }

    load(messageCenter) {
      return Promise.resolve()
      .then(() => this._contactsManager.create({
        name: 'User',
        phone: '867-5309'
      }))
      .then(() => {
        this._timeout = setTimeout(() => {
          this._contactsManager.create({
            name: 'Charlie',
            phone: '555-555-5555'
          });
        }, 15000);
      })
      .then(() => {
        this._contactsManager.create({
          name: "Mike",
          phone: null
        }).catch(err => console.log("--- Create got error: ", err));
        return Promise.resolve();
      });
    }

    unload(messageCenter) {
      return Promise.resolve()
      .then(() => {
        clearTimeout(this._timeout);
      });
    }
  }

  module.exports = PhonebookManager;
})();
