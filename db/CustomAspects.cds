namespace com.custom.aspects;


aspect CustomAuthorsAspect {
    strField : Integer @(baz);
    decField : Decimal @(baz);
    createdAt : Timestamp @cds.on.insert : $now;
    createdBy : String(255);
    teste : String(10);
}

aspect CustomCommonAspect {
    commonField : String(10);
}