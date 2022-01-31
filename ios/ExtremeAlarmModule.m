//
//  ExtremeAlarmModule.m
//  ExtremeAlarm
//
//  Created by Julianne Hong on 1/30/22.
//

#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import "ExtremeAlarmModule.h"

@implementation ExtremeAlarmModule

// To export a module named ExtremeAlarmModule
RCT_EXPORT_MODULE(ExtremeAlarmModule);

RCT_EXPORT_METHOD(createExtremeAlarm:(NSString *)name)
{
  RCTLogInfo(@"createExtremeAlarm called with %@", name);
}

@end
