"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesDto = void 0;
class ModulesDto {
    constructor(id, name, identifier) {
        this.id = id;
        this.name = name;
        this.identifier = identifier;
    }
    static modules(object) {
        const { id, name, identifier, isActive } = object;
        if (!id)
            return ['Missing Id Module '];
        if (!name)
            return ['Missing name Module'];
        if (!Number(identifier))
            ['Missing Identifier'];
        if (!isActive === false)
            return ['Isnt active'];
        return [undefined, new ModulesDto(id, name, identifier)];
    }
}
exports.ModulesDto = ModulesDto;
